const sprint = new Vue({
  el: '#sprint',
  data: {
    word: '',
    adj: ''
  },
  methods: {
    newNoun: function newNoun() {
      fetch('/noun')
        .then(results => results.json())
        .then(data => this.word = data.word);
    },
    newAdj: function newAdj() {
      fetch('/adj')
        .then(results => results.json())
        .then(data => this.adj = data.adj);
    },
  },
});

const newSprintButton = new Vue({
  el: '#new-sprint-button',
  methods: {
    newSprint: function newSprint() {
      fetch('/name')
        .then(results => results.json())
        .then((data) => {
          sprint.word = data.word;
          sprint.adj = data.adj;
        });
    },
  },
});

newSprintButton.newSprint();
