package com.okay.service;

import com.okay.domain.entity.Corona;
import com.okay.domain.repository.CoronaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CoronaService {

    @Autowired
    CoronaRepository coronaRepository;

    public void create(Corona corona){
        coronaRepository.save(corona);
    }

}
