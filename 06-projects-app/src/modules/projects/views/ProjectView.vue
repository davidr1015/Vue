<template>
  <div class="w-full">
    <section class="m-2">
      <BreadCrumbs :name="project?.name ?? 'No name'" />
    </section>

    <section class="m-2" >
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-14">Completada</th>
              <th>Tarea</th>
              <th>Completada en</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
            </tr>
            
            <tr class="hover">
              <th></th>
              <td>
                <input 
                type="text"
                class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100"
                placeholder="Nueva tarea"
                />
              </td>
              <td></td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectsStore } from '../store/projects.store';
import { watch } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface Props {
  id: string;
}

const router = useRouter();
const props = defineProps<Props>();
const projectStore = useProjectsStore();
const project = ref<Project | null>();

// const project = projectStore.projectsList.find(project => project.id === props.id)

watch(
  () => props.id,
  () => {
    project.value = projectStore.projectsList.find((project) => project.id === props.id);
    if (!project.value) {
      router.replace('/');
    }
  },
  {
    immediate: true,
  },
);
</script>
