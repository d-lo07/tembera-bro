  <script setup>
  import { ref } from 'vue'

  const count = ref(0)
  </script>

  <template>
    <section class="bg-gray-500 min-h-screen flex items-center justify-center">
      
      <div class="text-center">

        <h1 class="text-4xl font-bold mb-4">BLOG</h1>

        <table class="bg-gray rounded shadow mb-6">
          <tr>
            <td class="p-3">HM</td>
            <td class="p-3">Jean De Dieus</td>
          </tr>

          <tr>
            <td class="p-3">DOD</td>
            <td class="p-3">Marcel Louis</td>
          </tr>

          <tr>
            <td class="p-3">DOS</td>
            <td class="p-3">ZAKARI</td>
          </tr>
        </table>

        <button
          @click="count++"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Count is: {{ count }}
        </button>

      </div>

    </section>
  </template>