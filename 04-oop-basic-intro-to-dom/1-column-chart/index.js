export default class ColumnChart {    
    chartHeight = 50;
    element;

    constructor(props = {}) {
        const {
            data = [],
            label = '',
            link = '',
            value = 0,
            formatHeading = (value) => value,
        } = props;

        this.data = data;
        this.label = label;
        this.link = link;
        this.value = value;
        this.formatHeading = formatHeading;

        this.render();

    }

    render() {
        this.element = this.createElement();
    }

    createLinkTemplate() {
        return  this.link ? `<a class="column-chart__link" href="${this.link}">View all</a>` : '';
    }

    createChartTemplate() {       
        return this.getColumnProps(this.data).map(({value, percent}) => (
            `<div style="--value: ${value}" data-tooltip="${percent}"></div>`
            )).join('')
    }

    createTemplate() {
        return `<div class="column-chart" style="--chart-height: ${this.chartHeight}">
      <div class="column-chart__title">
        ${this.label}
        ${this.createLinkTemplate()}
      </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">${this.formatHeading(this.value)}</div>
        <div data-element="body" class="column-chart__chart">
          ${this.createChartTemplate()}
                  
        </div>
      </div>
    </div>`;
    }

    createElement() {
        const element = document.createElement('div');
        element.innerHTML = this.createTemplate();
        const firstElement = element.firstElementChild;
        if (!this.data.length) {
            firstElement.classList.add('column-chart_loading');
        }       
        return firstElement;

    }

    getColumnProps(data) {
    const maxValue = Math.max(...data);
    const scale = 50 / maxValue;

    return data.map(item => {
        return {
            percent: (item / maxValue * 100).toFixed(0) + '%',
            value: String(Math.floor(item * scale))
        };
        });
    }

    update(newData) {
        this.data = newData;
        this.element.innerHTML = this.createElement();       
    }

    remove() {
        this.element?.remove(); 
        this.element = null;       
    }

    destroy() {
       this.remove();
    }

}
