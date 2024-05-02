package com.example.Builders;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.Entities.User;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ResponseBuilder {
    public static ResponseEntity<Object> responseBuilder (
            String type,
            HttpStatus httpStatus,
            Object responseObject)
    {
        Map<String, Object> response = new HashMap<>();
        response.put(type, responseObject);
        return new ResponseEntity<>(response, httpStatus);
    }

    public static ResponseEntity<Object> badRequestResponse (String message) {

        HttpStatus httpStatus = HttpStatus.BAD_REQUEST;
        Map<String, Object> response = new HashMap<>();
        response.put("message", message);

        return new ResponseEntity<>(response, httpStatus);
    }
    public static ResponseEntity<Object> internalErrorResponse () {
        String message = "Internal Server Error";
        HttpStatus httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        Map<String, Object> response = new HashMap<>();
        response.put("message", message);

        return new ResponseEntity<>(response, httpStatus);
    }

    public static ResponseEntity<Object> shouldReturnThatUserWithTheEmailExists() {
        String message = "User with such email was already created";
        HttpStatus httpStatus = HttpStatus.FORBIDDEN;
        Map<String, Object> response = new HashMap<>();
        response.put("message", message);

        return new ResponseEntity<>(response, httpStatus);
    }
    public static ResponseEntity<Object> authorizationResponse (boolean verified, String api_key) {
        String message;
        HttpStatus httpStatus;
        Map<String, Object> response = new HashMap<>();
        if (!verified) {
            message = "Unauthorized";
            httpStatus = HttpStatus.FORBIDDEN;
            response.put("verified", message);
        } else {
            message = "Authorized";
            httpStatus = HttpStatus.OK;
            response.put("verified", message);
            response.put("api_key", api_key);
        }
        return new ResponseEntity<>(response, httpStatus);
    }

    public static ResponseEntity<Object> shouldReturnUser(User user) {
        HttpStatus httpStatus = HttpStatus.OK;
        Map<String, Object> response = new HashMap<>();
        response.put("id", user.getId());
        response.put("fname", user.getFname());
        response.put("lname", user.getLname());
        response.put("email", user.getEmail());
        response.put("phone", user.getPhone());
        response.put("password", user.getPassword());
        return new ResponseEntity<>(response, httpStatus);
    }
    public static ResponseEntity<Object> shouldReturnListOfUsers(List<User> users) {
        HttpStatus httpStatus = HttpStatus.OK;
        Map<String, Object> response = new HashMap<>();
        for (User obj : users) {
            response.put("id", obj.getId());
            response.put("fname", obj.getFname());
            response.put("lname", obj.getLname());
            response.put("email", obj.getEmail());
            response.put("phone", obj.getPhone());
            response.put("password", obj.getPassword());
        }
        return new ResponseEntity<>(response, httpStatus);
    }
}
