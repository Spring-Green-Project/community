package com.okay.exception;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.util.Date;

@Controller
@ControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(IllegalArgumentException.class)
    public final String illegalArgumentException(Model model, Exception ex, WebRequest request){ // 잘못된 파라미터 에러
        ExceptionResponse exceptionResponse = new ExceptionResponse(new Date(), ex.getMessage(), request.getDescription(false));
        model.addAttribute("exceptionRespones", exceptionResponse);
        return "error/IllegalArgumentException";
    }
}
