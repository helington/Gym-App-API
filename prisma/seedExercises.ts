import { PrismaClient } from "@prisma/client";

import axios from "axios";
import dotenv from "dotenv"

dotenv.config()

const prisma = new PrismaClient();
const API_KEY = process.env.API_KEY;

async function fetchExercises(muscle: string) {
    const response = await axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
        headers: {
            "X-Api-Key": API_KEY
        },
    });
    return response.data;
}

async function seed() {
    const muscles = [
      "abdominals",
      "abductors",
      "adductors",
      "biceps",
      "calves",
      "chest",
      "foreams",
      "glutes",
      "hamstrings",
      "lower_back",
      "middle_back",
      "neck",
      "quadriceps",
      "traps",
      "triceps",
    ];

    for (const muscle of muscles) {
        const exercises = await fetchExercises(muscle);

        for (const exercise of exercises){
            await prisma.exercise.create({
                data: {
                    name: exercise.name,
                    muscle: exercise.muscle,
                    equipment: exercise.equipment,
                    difficulty: exercise.difficulty,
                }
            });
        };
    };

    console.log("Database seeded!")
}

seed()
    .catch(err => {
        console.log(err);
    })
    .finally(async () => {
        await prisma.$disconnect()
    })