import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Project } from "../interfaces/project.interface";
import {v4 as uuidv4} from 'uuid'
import { useLocalStorage } from "@vueuse/core";


const initialLoad = ():Project[] => {

 return [
    {
        id: uuidv4(),
        name: 'Project 1',
        tasks: []
    },
    {
        id: uuidv4(),
        name: 'Project 2',
        tasks: []
    }
 ]
}

export const useProjectsStore = defineStore('projects',() => {

    const projects = ref(useLocalStorage<Project[]>('projects', initialLoad()) );

    const addProject = (name: string) => {
        if(name.length === 0) return;

        projects.value.push({
            id: uuidv4(),
            name: name,
            tasks: []
        })
    }

    return {

        projects,
        // Getters
        projectsList: computed(() => [...projects.value]),
        noProjects: computed(() => projects.value.length === 0 ),
        // Actions
        addProject
    };
  })