const reel = require("node-reel");

/**
 * @class CronService => Service that provides scheduled tasks.
 */
class CronService {
  static runTask(task: Function) {
    reel()
      .call(() => {
        task();
      })
      //.everyMinute()
      .monthly()
      .run();
  }
}

export default CronService;
