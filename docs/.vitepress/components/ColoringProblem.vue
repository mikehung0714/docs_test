<script setup>
import { computed, ref } from 'vue'

// 可用顏色
const colors = ['red', 'blue', 'green']

// 節點資料
const nodes = ref([
  { id: 'A', x: 80, y: 60, color: '' },
  { id: 'B', x: 200, y: 60, color: '' },
  { id: 'C', x: 140, y: 160, color: '' }
])

// 邊：代表哪些節點相鄰
const edges = [
  ['A', 'B'],
  ['B', 'C'],
  ['C', 'A']
]

// 目前選到的顏色
const selectedColor = ref('red')

// 幫節點上色
function paintNode(node) {
  node.color = selectedColor.value
}

// 檢查是否違反規則
const hasConflict = computed(() => {
  return edges.some(([a, b]) => {
    const nodeA = nodes.value.find(n => n.id === a)
    const nodeB = nodes.value.find(n => n.id === b)

    return nodeA.color && nodeA.color === nodeB.color
  })
})

// 檢查是否完成
const isComplete = computed(() => {
  return nodes.value.every(node => node.color) && !hasConflict.value
})

function reset() {
  nodes.value.forEach(node => {
    node.color = ''
  })
}
</script>

<template>
  <div class="coloring-box">
    <h3>互動練習：三角形著色問題</h3>

    <p>請幫三個節點上色，規則是：相鄰節點不能同色。</p>

    <div class="toolbar">
      <button
        v-for="color in colors"
        :key="color"
        :class="{ active: selectedColor === color }"
        @click="selectedColor = color"
      >
        {{ color }}
      </button>

      <button @click="reset">重設</button>
    </div>

    <svg width="300" height="230" viewBox="0 0 300 230">
      <line x1="80" y1="60" x2="200" y2="60" />
      <line x1="200" y1="60" x2="140" y2="160" />
      <line x1="140" y1="160" x2="80" y2="60" />

      <g
        v-for="node in nodes"
        :key="node.id"
        @click="paintNode(node)"
        class="node"
      >
        <circle
          :cx="node.x"
          :cy="node.y"
          r="26"
          :fill="node.color || 'white'"
        />
        <text
          :x="node.x"
          :y="node.y + 5"
          text-anchor="middle"
        >
          {{ node.id }}
        </text>
      </g>
    </svg>

    <p v-if="hasConflict" class="bad">
      有衝突：相鄰節點不能同色。
    </p>

    <p v-else-if="isComplete" class="good">
      完成！這是一個合法著色。
    </p>

    <p v-else>
      請繼續替節點上色。
    </p>
  </div>
</template>

<style scoped>
.coloring-box {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 16px;
  margin: 24px 0;
}

.toolbar {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

button {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
}

button.active {
  font-weight: bold;
  outline: 2px solid var(--vp-c-brand-1);
}

line {
  stroke: var(--vp-c-text-1);
  stroke-width: 3;
}

circle {
  stroke: var(--vp-c-text-1);
  stroke-width: 3;
  cursor: pointer;
}

text {
  fill: black;
  font-weight: bold;
  pointer-events: none;
}

.good {
  color: #0a7f32;
  font-weight: bold;
}

.bad {
  color: #c62828;
  font-weight: bold;
}
</style>