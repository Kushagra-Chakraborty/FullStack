export const getargs = (args) => {
  if (args === null || args === undefined) {
    return "Guest";
  }
  else{
    return args;
  }
};