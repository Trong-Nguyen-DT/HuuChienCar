package com.dt.behuuchiencar.model;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Information {

    private Long id;
    private Customer customer;
    private LocalDate startDate;
    private LocalDate endDate;
    private LocalDate expectedDate;
    private Long originalOdo;
    private Long endedOdo;
    private Long surcharge;
    private Long totalPrice;
}
