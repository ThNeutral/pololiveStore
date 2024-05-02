package com.example.Controllers;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
public class ProductController {
    @PatchMapping("/change")
    public ResponseEntity<Object> update(@RequestBody String request, @RequestHeader("Authorization") String token) {
        ObjectMapper mapper = new ObjectMapper().enable(DeserializationFeature.FAIL_ON_TRAILING_TOKENS);
        JsonNode inputData;
        System.out.println(token);
        return new ResponseEntity<>("User is not authorized", HttpStatus.FORBIDDEN);
    }
}
