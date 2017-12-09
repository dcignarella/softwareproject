/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    schema: true,
  attributes: {
      fName:{
          type: 'string',
          required: 'true',
          alpha: 'true'
      },
      lName:{
          type: 'string',
          required: 'true',
          alpha: 'true'
      },
      address1:{
          type: 'string',
          required: 'true'
      },
      address2:{
          type: 'string'
      },
      city:{
          type: 'string',
          required: 'true',
          alpha: 'true'
      },
      state:{
          type: 'string',
          required: 'true'
      },
      zip:{
          type: 'integer',
          required: 'true'
      },
      clientLink:{
          collection: 'client',
          via: 'userClientLink'
      },
      doctorLink:{
          collection: 'doctor',
          via: 'userDoctorLink'
      },
      typeLink:{
          collection: 'type',
          via: 'userTypeLink'
      },
      loginInfoLink:{
          collection: 'loginInfo',
          via: 'userLoginInfoLink'
      }
  }
};

