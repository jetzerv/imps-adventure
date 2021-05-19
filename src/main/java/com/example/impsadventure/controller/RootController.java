package com.example.impsadventure.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RootController {

    @GetMapping("/")
    public String root() {
        return "root";
    }

    @GetMapping("/theme")
    public String theme() {
        return "pages/grayscale-theme";
    }

    @GetMapping("/projects/imps-adventure")
    public String impsAdventure() {
        return "pages/imps-adventure";
    }
}