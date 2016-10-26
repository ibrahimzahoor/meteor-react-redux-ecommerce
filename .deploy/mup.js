module.exports = {
  servers: {
    one: {
      host: '104.43.21.30',
      username: 'ibrahimzahoor',
      pem: "/Users/ibrahimzahoor/.ssh/id_rsa"
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'meteor-react',
    path: '/Users/ibrahimzahoor/Documents/workspace/meteor-react-redux-ecommerce',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://104.43.21.30',
      MONGO_URL: 'mongodb://localhost/meteor'
    },
    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 150,
    enableUploadProgressBar: true
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
