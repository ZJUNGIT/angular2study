let logValue= {
  logs:["Hello","World"],
  log:(msg)=>{
    console.warn("From values: ",msg);
  },
  help:()=>{
    console.log("Just say hello");
  }
}

export { logValue }
