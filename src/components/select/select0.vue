<template>
  <div class="mt-select" ref="selectOptionLabel">

    <i class="el-input__icon el-icon-loading" v-show="loading"></i>
    <i class="el-input__icon el-icon-circle-close" v-show="selectValue && !disabled" @click="clearCheck"></i>
    <input
    class="mt-select_input"
    type="text"
    :readonly="readonly"
    :placeholder="placeholder"
    :disabled="disabled"
    v-model="selectOptionLabel"
    @input="handleInput"
    @click="toggleList" />

    <div class="mt-select_list" v-show="showList">
      <div class="mt-select_item"
        :class="{'on': selectValue == item.id}"
        v-for="item in optionList"
        :key="item.id"
        v-show="!item.hide"
        @click="handleCheck(item.id, $event)">{{item.name}}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'mt-select',
  data () {
    return {
      optionList: [],
      selectValue: undefined,
      selectOptionLabel: '',
      showList: false,
      readonly: true
    }
  },

  mounted () {
    document.addEventListener('click', this.domHandleClick)
    this.readonly = !(this.filters.length > 0)
  },

  props: {
    value: [String, Number],
    options: Array,
    filters: {
      type: Array,
      default: function () {
        return []
      }
    },
    placeholder: String,
    disabled: Boolean,
    loading: Boolean,
    onChange: Function,
    onClear: Function
  },

  watch: {
    'options' (val, oldValue) {
      this.setOptions(val)
    },

    'value' (val, oldValue) {
      this.checkItem(val)
      this.$emit('on-change', val)
    },

    'selectValue' (val, oldValue) {
      this.$emit('input', (val ? (val + '') : ''))
    }

  },
  methods: {
    domHandleClick (event) {
      if (this.showList) {
        this.checkItem(this.value)
      }
      this.showList = false
    },

    toggleList (event) {
      this.showList = !this.showList
      if (this.showList && !this.readonly) {
        event.target.select()
        this.filterByKeyword('')
      } else {
        this.checkItem(this.value)
      }
      event.stopPropagation()
    },

    setOptions (list = []) {
      this.optionList = list
      this.checkItem(this.value)
    },

    handleCheck (id, event) {
      this.checkItem(id)
      this.showList = false
      event.stopPropagation()
    },

    checkItem (id) {
      if (!id) {
        this.selectValue = id
        this.selectOptionLabel = ''
      }
      for (let i = 0; i < this.optionList.length; i++) {
        if (this.optionList[i].id == id) {
          this.selectValue = this.optionList[i].id
          this.selectOptionLabel = this.optionList[i].name
          break
        }
      }
    },

    handleInput () {
      this.filterByKeyword(this.selectOptionLabel)
    },

    filterByKeyword (input) {
      this.showList = true
      if (this.filters.length > 0) {
        this.optionList = this.optionList.map((item) => {
          item.hide = !this.containsKeyword(item, input)
          return item
        })
      }
    },

    containsKeyword (item, input) {
      return this.filters.some((keyword) => {
        return item[keyword] && item[keyword].toUpperCase().indexOf(input.toUpperCase()) > -1
      })
    },

    clearCheck () {
      this.selectValue = undefined
      this.selectOptionLabel = ''
      this.$emit('on-clear')
    }

  }
}
</script>
