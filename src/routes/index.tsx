import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonImage } from '../components/pokemons/pokemon-image';

export default component$(() => {
  const pokemonId = useSignal(1); //primitivos, booleans, strings
  const showBackImage = useSignal(false);
  const showImage = useSignal(false);

  const changePokemonId = $((value: number) => {
    if ((pokemonId.value + value) <= 0) return;
    pokemonId.value += value;
    showImage.value = false;
  })

  const changePokemonImage = $((value: boolean) => {
    showBackImage.value = value;
  })
  
  return (
    <>
      <span class="text-2xl">¿Quién es ese pokemon?</span>
      <span class="text-9xl">{pokemonId}</span>
      
      <PokemonImage 
        id={pokemonId.value} 
        size={200}
        backImage={showBackImage.value}
        isVisible={showImage.value}
      />
      <div class="mt-2">
        <button onClick$={() => changePokemonId(-1)} class="btn btn-primary mr-2">Atrás</button>
        <button onClick$={() => changePokemonId(+1)} class="btn btn-primary mr-2">Siguiente</button>
        <button onClick$={() => changePokemonImage(!showBackImage.value)} class="btn btn-primary mr-2">Voltear</button>
        <button onClick$={() => { showImage.value = !showImage.value }} class="btn btn-primary">{ showImage.value ? 'Ocultar' : 'Revelar' }</button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "PokeQwik",
  meta: [
    {
      name: "description",
      content: "Esta es mi primera aplicaciòn en qwik",
    },
  ],
  links: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
      crossorigin: 'anonymous',
      referrerpolicy: 'no-referrer'
    }
  ]
};

