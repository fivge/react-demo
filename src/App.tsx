import React from "react";
import { of, fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from "rxjs/operators";

import "./app.scss";

class App extends React.Component {
  render() {
    let source = of([1, 2, 3]);
    let result = source.pipe(map(res => res.map(arr => arr * arr)));
    result.subscribe(res => console.log("rxjs: ", res));
    return (
      <div>
        <p>Rollup + TypeScript + React = ❤️</p>
        <ButtonClick />
        <InputDebounce />
      </div>
    );
  }
}

class ButtonClick extends React.Component {
  render() {
    const data = "点击";
    // setFilter() {

    // }
    return (
      <div>
        {/* <button>{data}</button>
        <button aria-label="Filter" onClick={() => setFilter('bar')} />
        <input
                        id={id}
                        {...getInputProps({
                            ...inputProps,
                            ...inputPropsOptions,
                        })}
                    /> */}
      </div>
    );
  }
}

class InputDebounce extends React.Component {
  private timer: any = null;
  private debounce() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.sayHi();
    }, 1 * 1000);
  }

  private sayHi() {
    console.log("yes!");
    // this.style.color = "red";
  }

  render() {
    return (
      <div>
        <input onChange={() => this.debounce()} />
      </div>
    );
  }
}

export { App };
