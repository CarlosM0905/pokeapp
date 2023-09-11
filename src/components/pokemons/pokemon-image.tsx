import { $, component$, useSignal, useTask$ } from "@builder.io/qwik";

interface Props {
  id: number;
  size?: number;
  backImage: boolean;
  isVisible?: boolean
}

export const PokemonImage = component$(({ id, size = 200, backImage = false, isVisible = false }: Props) => {

  const imageLoaded = useSignal(false);

  useTask$(({ track }) => {
    track(() => id);
    imageLoaded.value = false;
  })

  const playPokeAudio = $(() => {
    const audio = document.getElementById('pokeAudio') as HTMLAudioElement;
    
    audio.play();
  })

  const setImage = (id: number, backImage: boolean = false) => {
    if (backImage) return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  return (
    <div class="flex items-center justify-center"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {
        !imageLoaded.value && <span>Cargando ...</span>
      }

      <img 
        src={setImage(id, backImage)}
        alt="Pokemon Sprite"
        width={size}
        height={size}
        onLoad$={() => {
          imageLoaded.value = true;
          playPokeAudio();
        }}
        class={[
          {
            'hidden': !imageLoaded.value,
            'brightness-0': !isVisible
          },
          'transition-all'
        ]}
      />
      <audio src="/poke_audio.mp3" id="pokeAudio"></audio>

    </div>
  )
})