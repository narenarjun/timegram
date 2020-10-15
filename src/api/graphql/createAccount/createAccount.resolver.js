const Mutation = {
  Mutation: {
    createAccount: async (_, args, { prisma }, info) => {
      const { username, email, firstName = "", lastName = "", bio = "" } = args;
      // console.log(prisma);
      const user = await prisma.user.create({
        data: { username, email, firstName, lastName, bio },
      });
      return user;
    },
  },
};

export default Mutation;
