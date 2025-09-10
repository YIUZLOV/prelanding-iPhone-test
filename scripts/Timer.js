class Timer {
  selectors = {
    root: '[data-js-timer]',
    time: '[data-js-timer-time]'
  }

  constructor () {
    this.rootElement = document.querySelector(this.selectors.root)
    this.timeElement = this.rootElement.querySelector(this.selectors.time)
    this.bindEvents()
  }

  addZero(num) {
    return num < 10 ? '0' + num : num
  }

  bindEvents() {
    const now = new Date()
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0)
    let totalMilliseconds = midnight - now
    let totalSeconds = Math.floor(totalMilliseconds / 1000)
    const maxSeconds = 24 * 60 * 60

    const interval = setInterval(() => {
        const hours = Math.floor(totalSeconds / 3600)
        const minutes = Math.floor((totalSeconds % 3600) / 60)
        const seconds = totalSeconds % 60

        const formattedTime = `${this.addZero(hours)}:${this.addZero(minutes)}:${this.addZero(seconds)}`
        
        this.timeElement.textContent = formattedTime

        totalSeconds--

        if (totalSeconds < 0) {
            clearInterval(interval)
            this.timeElement.textContent = '00:00:00'
        }
    }, 1000)
  }
}

export default Timer