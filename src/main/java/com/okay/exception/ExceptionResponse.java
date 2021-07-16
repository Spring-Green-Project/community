package com.okay.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExceptionResponse { // 예외의 유형
    private Date timeStamp;
    private String message;
    private String details;
}
