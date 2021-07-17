package com.okay.service;

import com.okay.domain.entity.MicroDust;
import com.okay.domain.repository.MicroDustRepostiory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SchedulerService { // Open Api

    @Autowired
    MicroDustRepostiory microDustRepostiory;

    public void create(MicroDust microDust){ // DB에 값 저장
        microDustRepostiory.save(microDust);
    }
}
