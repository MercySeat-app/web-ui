/* eslint-disable @typescript-eslint/no-unused-vars */
import "@testing-library/jest-dom";

class ResizeObserverMock {
  callback: ResizeObserverCallback;

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }

  observe(_target: Element) {
    // no-op
  }

  unobserve(_target: Element) {
    // no-op
  }

  disconnect() {
    // no-op
  }
}

if (!("ResizeObserver" in globalThis)) {
  globalThis.ResizeObserver = ResizeObserverMock;
}