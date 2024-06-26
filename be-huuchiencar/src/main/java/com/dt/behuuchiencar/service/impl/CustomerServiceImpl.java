package com.dt.behuuchiencar.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dt.behuuchiencar.constant.ErrorConstants;
import com.dt.behuuchiencar.convertor.CustomerConvertor;
import com.dt.behuuchiencar.entity.CustomerEntity;
import com.dt.behuuchiencar.exception.MessageException;
import com.dt.behuuchiencar.model.Customer;
import com.dt.behuuchiencar.model.request.CustomerImageInput;
import com.dt.behuuchiencar.model.request.CustomerInput;
import com.dt.behuuchiencar.repository.CustomerRepository;
import com.dt.behuuchiencar.service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    private ImageService imageService;

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Object> getAllCustomer() {
        return CustomerConvertor.convertToObjects(customerRepository
                .findByDeletedFalseOrderByIdDesc()
                .stream()
                .map(CustomerConvertor::toModel)
                .toList());
    }

    @Override
    public Customer createCustomer(CustomerInput customer) {
        if (customerRepository.existsByCitizenId(customer.getCitizenId())) {
            throw new MessageException(ErrorConstants.INVALID_CITIZENID_MESSAGE, ErrorConstants.INVALID_CITIZENID_CODE);
        }
        CustomerEntity entity = new CustomerEntity();
        entity.setName(customer.getName());
        entity.setPhone(customer.getPhone());
        entity.setCitizenId(customer.getCitizenId());
        entity.setCitizenIdFront(imageService.uploadImage(customer.getCitizenIdFront()));
        entity.setCitizenIdBack(imageService.uploadImage(customer.getCitizenIdBack()));
        entity.setDriverLicenseFront(imageService.uploadImage(customer.getDriverLicenseFront()));
        entity.setDriverLicenseBack(imageService.uploadImage(customer.getDriverLicenseBack()));
        entity.setDeleted(false);
        return CustomerConvertor.toModel(customerRepository.save(entity));
    }

    @Override
    public Customer updateCustomer(Customer customer) {
        CustomerEntity entity = customerRepository
            .findById(customer.getId())
            .orElseThrow(() -> new MessageException(ErrorConstants.NOT_FOUND_MESSAGE, ErrorConstants.NOT_FOUND_CODE));
        entity.setName(customer.getName());
        entity.setPhone(customer.getPhone());
        if (customer.getCitizenId() != null) {
            entity.setCitizenId(customer.getCitizenId());
        }
        return CustomerConvertor.toModel(customerRepository.save(entity));
    }

    @Override
    public Customer updateImageCustomer(CustomerImageInput input) {
        CustomerEntity entity = customerRepository
            .findById(input.getId())
            .orElseThrow(() -> new MessageException(ErrorConstants.NOT_FOUND_MESSAGE, ErrorConstants.NOT_FOUND_CODE));
        
        if (input.getCitizenIdFront() != null) {
            entity.setCitizenIdFront(imageService.uploadImage(input.getCitizenIdFront()));
        }
        if (input.getCitizenIdBack() != null) {
            entity.setCitizenIdBack(imageService.uploadImage(input.getCitizenIdBack()));
        }
        if (input.getDriverLicenseFront() != null) {
            entity.setDriverLicenseFront(imageService.uploadImage(input.getDriverLicenseFront()));
        }
        if (input.getDriverLicenseBack() != null) {
            entity.setDriverLicenseBack(imageService.uploadImage(input.getDriverLicenseBack()));
        }
        return CustomerConvertor.toModel(customerRepository.save(entity));
    }

    @Override
    public Customer deleteCustomer(Long customerId) {
        CustomerEntity entity = customerRepository
            .findById(customerId)
            .orElseThrow(() -> new MessageException(ErrorConstants.NOT_FOUND_MESSAGE, ErrorConstants.NOT_FOUND_CODE));
        entity.setDeleted(true);
        return CustomerConvertor.toModel(customerRepository.save(entity));
    }

}
