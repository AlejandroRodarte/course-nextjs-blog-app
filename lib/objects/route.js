class Route {
  constructor() {
    const methodHandlers = {};
    const generateMethodHandlerProvider =
      (method) =>
      (...handlers) => {
        methodHandlers[method] = async (req, res) => {
          // logic to run all handlers one after the other
          const run = async (index = 0) => {
            if (index === handlers.length - 1) await handlers[index](req, res);
            else
              await handlers[index](req, res, async () => await run(index + 1));
          };
          return run();
        };
      };
    this.get = generateMethodHandlerProvider("get");
    this.post = generateMethodHandlerProvider("post");
    this.put = generateMethodHandlerProvider("put");
    this.delete = generateMethodHandlerProvider("delete");
    this.rootHandler = async (req, res) => {
      const method = req.method.toLowerCase();
      return methodHandlers[method](req, res);
    };
  }
}

export default Route;
