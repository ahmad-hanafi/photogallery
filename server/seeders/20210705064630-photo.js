'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Photos', [
      {
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
        createdAt: new Date(),
        updatedAt: new Date(),
        albumId: 1,
      },
      {
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
        thumbnailUrl: "https://via.placeholder.com/150/771796",
        createdAt: new Date(),
        updatedAt: new Date(),
        albumId: 1,
      },
      {
        id: 3,
        title: "officia porro iure quia iusto qui ipsa ut modi",
        url: "https://via.placeholder.com/600/24f355",
        thumbnailUrl: "https://via.placeholder.com/150/24f355",
        createdAt: new Date(),
        updatedAt: new Date(),
        albumId: 1,
      },
      {
        id: 4,
        title: "veritatis labore ipsum unde aut quam dolores",
        url: "https://via.placeholder.com/600/1279e9",
        thumbnailUrl: "https://via.placeholder.com/150/1279e9",
        createdAt: new Date(),
        updatedAt: new Date(),
        albumId: 2,
      },
      {
        id: 5,
        title: "architecto aut quod qui ullam vitae expedita delectus",
        url: "https://via.placeholder.com/600/e9603b",
        thumbnailUrl: "https://via.placeholder.com/150/e9603b",
        createdAt: new Date(),
        updatedAt: new Date(),
        albumId: 2,
      },
      {
        id: 6,
        title: "magnam quia sed aspernatur",
        url: "https://via.placeholder.com/600/74456b",
        thumbnailUrl: "https://via.placeholder.com/150/74456b",
        createdAt: new Date(),
        updatedAt: new Date(),
        albumId: 3,
      },
      {
        id: 7,
        title: "est facere ut nam repellat numquam quia quia eos",
        url: "https://via.placeholder.com/600/b0931d",
        thumbnailUrl: "https://via.placeholder.com/150/b0931d",
        createdAt: new Date(),
        updatedAt: new Date(),
        albumId: 3,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Photos', null, {});
  }
};
