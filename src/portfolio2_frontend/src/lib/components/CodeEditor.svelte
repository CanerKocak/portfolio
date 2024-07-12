<script>
  import { onMount } from 'svelte';
  import { EditorView, basicSetup } from 'codemirror';
  import { rust } from '@codemirror/lang-rust';
  import { oneDark } from '@codemirror/theme-one-dark';
  import { lineNumbers } from '@codemirror/view';
  import { EditorState } from '@codemirror/state';

  export let content = '';
  export let language = 'rust';
  let editor;
  let element;
  let isMobile = false;

  onMount(() => {
    const startState = EditorState.create({
      doc: content,
      extensions: [
        basicSetup,
        rust(),
        oneDark,
        lineNumbers(),
        EditorState.tabSize.of(4),
        EditorState.readOnly.of(true),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            content = update.state.doc.toString();
          }
        }),
      ],
    });

    editor = new EditorView({
      state: startState,
      parent: element,
    });

    const checkMobile = () => {
      isMobile = window.innerWidth <= 768;
      if (editor) {
        editor.dispatch({
          effects: EditorView.updateListener.of((update) => {
            update.view.dom.style.fontSize = isMobile ? '12px' : '14px';
          })
        });
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      editor.destroy();
      window.removeEventListener('resize', checkMobile);
    };
  });

  $: {
    if (editor && content !== editor.state.doc.toString()) {
      editor.dispatch({
        changes: { from: 0, to: editor.state.doc.length, insert: content }
      });
    }
  }
</script>

<div class="editor-container" class:mobile={isMobile} bind:this={element}></div>

<style>
  .editor-container {
    height: 100%;
    overflow: auto;
  }

  :global(.cm-editor) {
    height: 100%;
    font-family: 'Fira Code', monospace;
    font-size: 14px;
  }

  :global(.cm-scroller) {
    overflow: auto;
    max-height: 100%;
  }

  .editor-container.mobile :global(.cm-editor) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    .editor-container {
      max-height: 60vh;
    }
  }
</style>
