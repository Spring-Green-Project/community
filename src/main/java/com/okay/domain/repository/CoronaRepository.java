package com.okay.domain.repository;

import com.okay.domain.entity.Corona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoronaRepository extends JpaRepository<Corona, Long> {
}
