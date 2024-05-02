package com.example.Controllers;

import com.example.Builders.KeyBuilder;
import com.example.Builders.ResponseBuilder;
import com.example.Services.UserService;
import com.example.Entities.User;
import com.example.Role.*;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/shop")
public class UserController {
    UserService userService = new UserService();
//    @PostMapping("/register")
//    public ResponseEntity<Object> createUser(@RequestBody String request) {
//        ObjectMapper mapper = new ObjectMapper().enable(DeserializationFeature.FAIL_ON_TRAILING_TOKENS);
//        JsonNode inputData;
//        String email;
//        try {
//            inputData = mapper.readTree(request);
//        } catch (JsonProcessingException ex) {
//            ex.printStackTrace();
//            return new ResponseEntity<>(new ErrorMessage("Malformed json input"), HttpStatus.BAD_REQUEST);
//        }
//        try {
//            JsonNode nameJsonNode = inputData.get("name");
//            JsonNode emailJsonNode = inputData.get("email");
//            JsonNode passwordJsonNode = inputData.get("password");
//            String salt = BCrypt.gensalt();
//            if (Objects.isNull(nameJsonNode) || Objects.isNull(emailJsonNode) || Objects.isNull(passwordJsonNode)) {
//                return new ResponseEntity<>("Did not provide all required fields", HttpStatus.BAD_REQUEST);
//            } else {
//                String name = nameJsonNode.asText();
//                String fname = name.split(" ")[0];
//                String lname = name.split(" ")[1];
//                email = emailJsonNode.asText();
//                String password = BCrypt.hashpw(passwordJsonNode.asText(), salt);
//                //User user = new User(name.split(" ")[0], name.split(" ")[1], email, password, salt);
//                //userService.save(user);
//            }
//        } catch (Exception ex) {
//            ex.printStackTrace();
//            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//        User newUser = userService.findByEmail(email);
//        return new ResponseEntity<>(newUser.getId(), HttpStatus.CREATED); //Return API_KEY and only as JSON
//    }

    @PostMapping("/register")
    public ResponseEntity<Object> createUser (@RequestBody String request) {
        ObjectMapper mapper = new ObjectMapper().enable(DeserializationFeature.FAIL_ON_TRAILING_TOKENS);
        JsonNode input;
        String api_key;
        User user;
        try {
            input = mapper.readTree(request);
        } catch (JsonProcessingException ex) {
            ex.printStackTrace();
            return ResponseBuilder.badRequestResponse("Malformed Json");
        }
        try {
            JsonNode nameJsonNode = input.get("name");
            JsonNode emailJsonNode = input.get("email");
            JsonNode phoneJsonNode = input.get("phone");
            JsonNode passwordJsonNode = input.get("password");
            if (Objects.isNull(nameJsonNode) || Objects.isNull(emailJsonNode) || Objects.isNull(phoneJsonNode) || Objects.isNull(passwordJsonNode)) {
                return ResponseBuilder.badRequestResponse("All required fields are not provided");
            } if (!Objects.isNull(userService.findByEmail(emailJsonNode.asText()))) {
                return ResponseBuilder.shouldReturnThatUserWithTheEmailExists();
            } else {
                String name = nameJsonNode.asText();
                String fname = name.split(" ")[0];
                String lname = name.split(" ")[1];
                String email = emailJsonNode.asText();
                String phone = phoneJsonNode.asText();
                String salt = BCrypt.gensalt();
                String password = BCrypt.hashpw(passwordJsonNode.asText(), salt);
                api_key = KeyBuilder.generateKey();
                user = new User(fname, lname, email, phone, password, salt);

                userService.save(user);
                int user_id = userService.findByEmail(user.getEmail()).getId();
                userService.saveKey(user_id, api_key);
                return ResponseBuilder.authorizationResponse(true, api_key);
            }
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
            return ResponseBuilder.internalErrorResponse();
        } catch (Exception ex) {
            ex.printStackTrace();
            return ResponseBuilder.internalErrorResponse();
        }
    }

    @GetMapping("/login")
    public ResponseEntity<Object> loginUser(@RequestBody String request) {
        ObjectMapper mapper = new ObjectMapper().enable(DeserializationFeature.FAIL_ON_TRAILING_TOKENS);
        JsonNode input;
        String api_key;
        User user;
        try {
            input = mapper.readTree(request);
        } catch (JsonProcessingException ex) {
            ex.printStackTrace();
            return ResponseBuilder.badRequestResponse("Malformed JSON");
        }
        try {
            JsonNode emailJsonNode = input.get("email");
            JsonNode passwordJsonNode = input.get("password");
            if (Objects.isNull(emailJsonNode) || Objects.isNull(passwordJsonNode)) {
                return ResponseBuilder.badRequestResponse("All required fields are not provided");
            } else {
                String password = passwordJsonNode.asText();
                String email = emailJsonNode.asText();

                if(Objects.isNull(userService.findByEmail(email))) {
                    return ResponseBuilder.authorizationResponse(false, null);
                } else {
                    user = userService.findByEmail(email);
                    password = BCrypt.hashpw(password, user.getSalt());

                    if(!user.getPassword().equals(password)) {
                        return ResponseBuilder.authorizationResponse(false, null);
                    } else {
                        int id = user.getId();
                        api_key = KeyBuilder.generateKey();
                        userService.saveKey(id, api_key);
                        return ResponseBuilder.authorizationResponse(true, api_key);
                    }
                }
            }
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
            return ResponseBuilder.internalErrorResponse();
        } catch (Exception ex) {
            ex.printStackTrace();
            return ResponseBuilder.internalErrorResponse();
        }
    }
    @GetMapping("/delete")
    public ResponseEntity<Object> deleteUser(@RequestBody String request) {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode input;

        try {
            input = mapper.readTree(request);
        } catch (JsonProcessingException ex) {
            ex.printStackTrace();
            return ResponseBuilder.badRequestResponse("Malformed JSON");
        }
        try {
            JsonNode roleJsonNode = input.get("role");
            JsonNode idJsonNode = input.get("id");
            if (Objects.isNull(idJsonNode) || Objects.isNull(roleJsonNode)) {
                return ResponseBuilder.badRequestResponse("All required fields are not provided");
            } else {
                if (!roleJsonNode.asText().equalsIgnoreCase(Role.SUPER_ADMIN.name())) {
                    return ResponseBuilder.authorizationResponse(false, null);
                } else {

                    int id = idJsonNode.asInt();

                    if (Objects.isNull(userService.findById(id))) {
                        return ResponseBuilder.badRequestResponse("User with such id does not exist");
                    } else {
                        userService.delete(id);
                        return new ResponseEntity<>(HttpStatus.OK);
                    }
                }
            }
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
            return ResponseBuilder.internalErrorResponse();
        } catch (Exception ex) {
            ex.printStackTrace();
            return ResponseBuilder.internalErrorResponse();
        }
    }

    @GetMapping("/findByEmail")
    public ResponseEntity<Object> findByEmail(@RequestBody String request) {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode input;
        User user;

        try {
            input = mapper.readTree(request);
        } catch (JsonProcessingException ex) {
            ex.printStackTrace();
            return ResponseBuilder.badRequestResponse("Malformed JSON");
        }
        try {
            JsonNode emailJsonNode = input.get("name");
            if (Objects.isNull(emailJsonNode)) {
                return ResponseBuilder.badRequestResponse("All required fields are not provided");
            } else {
                String email = emailJsonNode.asText();
                user = userService.findByEmail(email);
                return ResponseBuilder.shouldReturnUser(user);
            }
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
            return ResponseBuilder.internalErrorResponse();
        }
    }
    @GetMapping("/getAllUsers")
    public ResponseEntity<Object> findAllUsers(@RequestBody String request) {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode input;
        List<User> users;
        try {
            input = mapper.readTree(request);
        } catch (JsonProcessingException ex) {
            ex.printStackTrace();
            return ResponseBuilder.badRequestResponse("Malformed JSON");
        }
        try {
            JsonNode idJsonNode = input.get("id");
            if (Objects.isNull(idJsonNode)) {
                return ResponseBuilder.badRequestResponse("All required fields are not provided");
            } else {
                int id = idJsonNode.asInt();
                Role role = userService.findById(id).getRole();
                if (!role.equals(Role.SUPER_ADMIN)) {
                    return ResponseBuilder.authorizationResponse(false, null);
                } else {
                    users = userService.findAllUsers();

                    return ResponseBuilder.shouldReturnListOfUsers(users);
                }
            }
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
            return ResponseBuilder.internalErrorResponse();
        } catch (Exception ex) {
            ex.printStackTrace();
            return ResponseBuilder.internalErrorResponse();
        }
    }
}
