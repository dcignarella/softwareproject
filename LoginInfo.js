/**
 * LoginInfo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
schema: true,
  attributes: {
      phone:{
          type:'integer',
          required:'true',
          minLength: '10',
          maxLength: '10'
      },
      email:{
          type:'email',
          required:'true',
          unique:'true',
      },
      password:{
          type:'string',
          required:'true',
          alphanumeric: 'true',
          minLength:'8'
      },
      userLoginInfoLink:{
          model:'user'
      }
  }
};

