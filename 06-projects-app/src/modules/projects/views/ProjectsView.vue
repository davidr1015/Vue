<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(project, index) in projectStore.projectsList" :key="project.id" lass="hover">
          <th>{{ index + 1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.tasks.length }}</td>
          <td>
            <progress class="progress progress-primary w-56" value="10" max="100"></progress>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <InputModal
    :open="modalOpen"
    title="Nuevo proyecto"
    subtitle="Dale un nombre único a tu proyecto"
    placeholder="Ingrese el nombre del proyecto"
    @close="modalOpen = false"
    @value="projectStore.addProject"
  />

  <CustomModal :open="customModalOpen">
    <template #header>
      <h1>Titulo del modal</h1>
    </template>

    <template #body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vero quos totam
        aspernatur aliquid nemo dicta optio quas, eligendi, necessitatibus ullam illum vel,
        repellendus nam rerum? Molestias impedit adipisci rem.
      </p>
    </template>

    <template #footer>
      <div class="flex justify-end">
        <button @click="customModalOpen = false" class="btn mr-4">Close</button>
        <button @click="customModalOpen = false" type="submit" class="btn btn-primary">
          Aceptar
        </button>
      </div>
    </template>
  </CustomModal>

  <FabButton @click="modalOpen = true">
    <AddCircle />
  </FabButton>

  <FabButton @click="customModalOpen = true" position="bottom-left">
    <ModalIcon />
  </FabButton>
</template>

<script lang="ts" setup>
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import CustomModal from '@/modules/common/components/CustomModal.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import { ref } from 'vue';
import ModalIcon from '@/modules/common/icons/ModalIcon.vue';
import { useProjectsStore } from '../store/projects.store';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const projectStore =  useProjectsStore();

const onNewValue = (projectName: string) => {
  projectStore.projectsList.push({
    id: '3',
    name: projectName,
    tasks: []
  })
};
</script>
