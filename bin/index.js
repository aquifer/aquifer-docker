/**
 * @file
 * Docker deployment for Aquifer.
 */

/* globals require, Aquifer, config, module */

module.exports = function(Aquifer, AquiferDockerConfig) {
  'use strict';

  var AquiferDocker = function() {};

  /**
   * Informs Aquifer of what this deployment script does.
   *
   * @return object
   * Details about this deployment script.
   */
  AquiferDocker.init = function() {
    return {
      description: 'Deploys Drupal site to a remote Aquifer-Docker server instance',
      options: {
        example: {
          name: 'example option',
          description: 'This is what my option changes about this deployment script',
          alias: 'o'
        }
      }
    }
  }

  /**
   * Run when user calls 'aquifer deploy-vagrant`.
   */
  AquiferDocker.run = function(options) {
    console.log(options);
  }

  return AquiferDocker;
};
