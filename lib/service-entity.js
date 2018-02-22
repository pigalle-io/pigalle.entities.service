/**
 * This file is part of pigalle.entities.service
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module pigalle-plugin-base-class
 * @description A base class to create a service entity usable by the Pigalle framework.
 * @example
 *
 * const {ServiceEntity} = require('@pigalle/entities.service')
 *
 * const myServiceEntity = ServiceEntity.factory()
 *
 */

const {EntityBase} = require('@pigalle/entities.base')

/**
 * The Pigalle type of the current class.
 *
 * @type {string}
 */
const PIGALLE_TYPE = 'service'

/**
 * A base class to create a service entity usable by the Pigalle framework.
 *
 * @class
 * @public
 */
class ServiceEntity extends EntityBase {
  /**
   * Create a new instance of {ServiceEntity}.
   *
   * @param args - The arguments.
   * @constructor
   * @public
   */
  constructor (...args) {
    super(...args)
    this.setType(PIGALLE_TYPE)
  }
}

module.exports = {}
module.exports.ServiceEntity = ServiceEntity
