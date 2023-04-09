export const homeTransition = {
  in: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  out: {
    opacity: 0,
    y: "-12%",
    duration: 0.75,
  }
};


  export const remedyTransition = {
    in: {
      opacity: 0,
      x: "100%", 
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: .75,
      }
    },
    out: {
      opacity: 0,
      x: "100%",
      transition:{
        duration: .75,
      }
    },
  };


  export const searchTransition = {
    in: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    out: {
        opacity: 0,
    },
};
  