import { generateSecret } from ("../../../utils/generateSecret");

const Mutation = {
  Mutation: {
    requestSecret: async (_, args, { prisma }, info) => {
      const { email } = args;
      const loginSecret = generateSecret();
      try {
        await prisma.user.update({
          data: {
            loginSecret,
          },
          where: {
            email,
          },
        });

        return true;
      } catch (error) {
          console.log(error);
          return false;
      }
    },
  },
};


export default Mutation;