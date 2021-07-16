package com.okay.domain.repository;

import com.okay.domain.entity.MicroDust;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MicroDustRepostiory extends JpaRepository<MicroDust,Long> {
}
