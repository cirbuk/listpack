export default {
  //Rows indexed by ID. Latest version of the rows including edits if any
  byId: {
    123: {
      id: 123,
      value: "text"
    },
    456: {
      id: 456,
      value: "checkbox"
    }
  },
  //Row results stored per query.
  byQuery: {
    "": {
      //List of ids fetched for this query
      rows: [123, 456],

      //Whenever the service completed action is received, the payload is sent to the isCompleted function to determine
      //the value of this boolean
      completed: false,

      //Whenever the service completed/erred action is received, this is made false
      //Whenever the service initiated action is received and there is no data for this query, this is made true
      loading: false,

      //Whenever the service completed/erred action is received, this is made false
      //Whenever the service initiated action is received and there is data for this query, this is made true
      loadingNext: true,

      //Whenever the service completed action is received, the payload is sent to the getPageData function to determine
      //the value of this object
      pagination: {
        next: 4
      }
    },
    "status::generated~status::on-hold": {
      rows: [123],
      completed: true,
      loading: false,
      loadingNext: false,
      pagination: {
        next: undefined
      }
    }
  },

  //Size of the data to be fetched in one shot via network
  fetchSize: 30,

  //Size of the data to respond with when selectors ask for next data/previous data
  //Applicable if page scrolling is enabled
  pageSize: 30,

  //Filters config
  filters: {
    source: [
      {
        id: "query",
        sid: "q",
        label: "Search",
        type: "text"
      },
      {
        id: "status",
        label: "Status",
        type: "checkbox",
        options: [{
          label: "Generated",
          value: "generated"
        }, {
          label: "On Hold",
          value: "on-hold"
        }]
      },
      {
        id: "completed",
        label: "Is completed?",
        type: "radio",
        options: [{
          label: "Yes",
          value: true
        }, {
          label: "No",
          value: false
        }]
      }
    ],
    selected: [{
      id: "query",
      value: "text1"
    }, {
      id: "status",
      value: "generated"
    }]
  },

  //row/column meta. Controlled by hooks
  meta: {
    selected: {
      rows: [123, 456],
    },
    loading: {
      columns: ["123::insights"]
    }
  },

  //Original data that is received from service. This will be stored only if the list is marked
  //as editable and undoable.
  orgData: {
    123: {}
  }
};
