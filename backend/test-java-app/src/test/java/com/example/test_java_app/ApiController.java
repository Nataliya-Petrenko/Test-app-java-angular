package com.example.test_java_app;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ApiController {

    @GetMapping("/api/data")
    public Map<String, String> getData() {
        Map<String, String> data = new HashMap<>();
        data.put("message", "Hello from the Java API!");
        return data;
    }

    @PostMapping("/api/data")
    public Map<String, String> postData(@RequestBody Map<String, String> requestData) {
        // Process the request data here
        Map<String, String> response = new HashMap<>();
        response.put("status", "Data received");
        response.put("receivedData", requestData.toString());
        return response;
    }
}
