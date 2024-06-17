<template>
  <Suspense>
    <template #default>
      <Tabs value="0">
        <TabList>
          <Tab
            :value="tab.name"
            v-for="tab in tabs"
            style="text-transform: capitalize"
            >{{ tab.name }}
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel :value="tab.name" v-for="tab in tabs">
            <p class="m-0">
              <TheGallery :name="tab.name" />
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </template>
    <template #fallback>
      <span>Loading...</span>
    </template>
  </Suspense>
</template>

<script setup>
import { ref } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import TheGallery from './TheGallery.vue';
import { fetchTabs } from './../../service/api.js';

const tabs = ref();
tabs.value = await fetchTabs();

</script>
