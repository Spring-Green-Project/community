package com.okay.controller;

import org.springframework.scheduling.annotation.Scheduled;

@org.springframework.web.bind.annotation.RestController
public class RestController {



    @Scheduled(fixedDelay = 3600000) // 1시간에 한번 갱신
    public void microDust(){

    }

    @Scheduled(fixedDelay = 86400000) // 하루에 한번씩 갱신
    public void corona(){

    }
}
