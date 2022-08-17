import { writable, derived } from "svelte/store";

export const apiData = writable([]);

export const randomAdvices = derived(apiData, ($apiData) => {
  if ($apiData.advice) {
    return $apiData.advice.map((advice) => advice.strAdvice);
  }
  return [];
});
