import { helper } from '@ember/component/helper';

export default helper(function duration(positional /*, named*/) {
  const [time] = positional;

  const minutes = Math.floor(time / 60);
  const seconds = String(time - minutes * 60).padEnd(2, 0); //To add zero at the end

  return `${minutes}: ${seconds}`;
});
