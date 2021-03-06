package com.okay.domain.entity;

import com.okay.Adapt.SurveyCommentAdapt;
import com.okay.dto.SurveyCommentDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "survey_comment")
@Getter
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class SurveyComment{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    @ManyToOne(cascade = CascadeType.DETACH)
    private Survey surveyNo;

    private String content;
    @Column(name = "reg_date")
    private String regDate;

    @JoinColumn(name = "user_no")
    @ManyToOne(cascade = CascadeType.DETACH)
    private User userNo; // 사용자 고유 번호

}
