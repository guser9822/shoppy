package com.shoppy.backend.config;

import com.shoppy.backend.utils.Const;

import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.stereotype.Component;

@Component
public class RepositoryConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.setBasePath(Const.APP_BASE_PATH);
        RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config);
    }

}
