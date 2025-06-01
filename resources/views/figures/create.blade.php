@extends('layouts.app')

@section('content')
    <div class="container mx-auto p-4">
        <h1 class="text-2xl mb-4">Créer une nouvelle figurine</h1>

        @if ($errors->any())
            <div class="bg-red-100 text-red-700 p-3 mb-4 rounded">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>• {{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form action="{{ route('figures.store') }}" method="POST" class="space-y-4" enctype="multipart/form-data">
            @csrf

            <div>
                <label class="block font-medium">Nom</label>
                <input type="text" name="name" value="{{ old('name') }}"
                       class="w-full border rounded p-2" required>
            </div>

            <div>
                <label class="block font-medium">Taille</label>
                <input type="text" name="size" value="{{ old('size') }}"
                       class="w-full border rounded p-2">
            </div>

            <div>
                <label class="block font-medium">Éditeur</label>
                <div class="flex items-center space-x-2">
                    <select name="editor_id" required
                            class="flex-1 border rounded p-2">
                        <option value="">— Choisir —</option>
                        @foreach($editors as $editor)
                            <option value="{{ $editor->id }}"
                                {{ old('editor_id') == $editor->id ? 'selected' : '' }}>
                                {{ $editor->name }}
                            </option>
                        @endforeach
                    </select>
                    <a href="{{ route('editors.create') }}"
                       class="text-blue-600 hover:underline text-sm">
                        + Ajouter un éditeur
                    </a>
                </div>
            </div>

            <div>
                <label class="block font-medium">Série</label>
                <div class="flex items-center space-x-2">
                    <select name="series_id" required
                            class="flex-1 border rounded p-2">
                        <option value="">— Choisir —</option>
                        @foreach($series as $s)
                            <option value="{{ $s->id }}"
                                {{ old('series_id') == $s->id ? 'selected' : '' }}>
                                {{ $s->name }}
                            </option>
                        @endforeach
                    </select>
                    <a href="{{ route('series.create') }}"
                       class="text-blue-600 hover:underline text-sm">
                        + Ajouter une série
                    </a>
                </div>
            </div>

            <div>
                <label class="block font-medium">Images</label>
                <input type="file"
                       name="images[]"
                       multiple
                       accept="image/*"
                       class="w-full border rounded p-2">
            </div>


            <div>
                <button type="submit"
                        class="bg-blue-600 text-white px-4 py-2 rounded">
                    Enregistrer
                </button>
            </div>
        </form>
    </div>
@endsection
