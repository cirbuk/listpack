export default {
  fields: {
    id: "ID",
    data: "row",
    filters: "query",
    paging: "pageInfo"
  },
  source: {
    fetcher(serviceData) {
    }
  },
  filters: {
    validation: true,
    constants: {},
    source: []
  },
  actions: {
    append: [{
      action: "APPEND_ACTION",
      data: "{{payload.data.list}}",
      paging: "{{next}}",
      query: ""
    }],
    prepend: [],
    insert: [{
      action: "INSERT_ACTION",
      data: "{{data}}",
      at: 4,
      paging: "{{next}}",
      query: {
        status: "generation-completed"
      }
    }],
    edit: ["EDIT_ACTION"],
    replace: ["REPLACE_ACTION"],
    delete: ["DELETE_ACTION"]
  },
  meta: {
    attributes: {
      isActive: {
        type: "flag",
        defaultValue: false,
        on: ["ACTIVATE"],
        off: ["DEACTIVATE"],
        toggle: ["TOGGLE"]
      }
    }
  },
  transformers: {
    row(row, action) {
    },
    columns: {
      insights(column, row, action) {
      }
    }
  },

  //Number of records to be fetched
  fetchSize: 30,

  //Other option available is "infinite" which is default
  scrollType: "page",

  //Size of the page to be returned by the selector
  pageSize: 20,

  //After every append, prepend or insert action will refer here after inserting the data to figure out if the set for
  //the current query is complete or not
  isCompleted(action, state) {
  },

  getFilters(selected, source, state) {
  },

  //After every append, prepend or insert action will refer here to update the page data for the next fetch
  getPageData(action, state) {
  },

  features: ["select", "rowLoading", "edit", "selectAll"]
}