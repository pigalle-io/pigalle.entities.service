/**
 * This file is part of pigalle.entities.service
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const {ServiceEntity} = require('../lib/service-entity')

describe('Class {ServiceEntity}', () => {
  it('should be a function', () => {
    (ServiceEntity).should.be.a.Function()
  })
})

describe('Create a instance of {ServiceEntity} using <new> keyword', () => {
  it('should be an object', () => {
    (new ServiceEntity()).should.be.an.Object()
  })

  it('should be an instance of {ServiceEntity}', () => {
    (new ServiceEntity()).should.be.an.instanceOf(ServiceEntity)
  })
})

describe('Create a instance of {ServiceEntity} using <factory> method', () => {
  it('should be an object', () => {
    (ServiceEntity.factory()).should.be.an.Object()
  })

  it('should be an instance of {ServiceEntity}', () => {
    (ServiceEntity.factory()).should.be.an.instanceOf(ServiceEntity)
  })

  it('should have an internal property named <type> equal to "service"', () => {
    (ServiceEntity.factory().type()).should.be.equal('service')
  })
})
