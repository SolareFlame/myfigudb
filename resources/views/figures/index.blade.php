@extends('layouts.app')

@section('title', 'Figurines')

@section('content')
    <div class="container mx-auto p-4">
        <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl font-bold">Toutes les figurines</h1>
            <a href="{{ route('figures.create') }}"
               class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                + Ajouter
            </a>
        </div>

        @if(session('success'))
            <div class="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded mb-4">
                {{ session('success') }}
            </div>
        @endif

        @if($figures->isEmpty())
            <p class="text-gray-600">Aucune figurine n’a encore été créée.</p>
        @else
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white shadow rounded">
                    <thead>
                    <tr class="bg-gray-100 text-left text-sm uppercase font-medium text-gray-600">
                        <th class="px-4 py-2">Nom</th>
                        <th class="px-4 py-2">Taille</th>
                        <th class="px-4 py-2">Éditeur</th>
                        <th class="px-4 py-2">Série</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($figures as $figure)
                        <tr class="border-t hover:bg-gray-50">
                            <td class="px-4 py-2">{{ $figure->name }}</td>
                            <td class="px-4 py-2">{{ $figure->size ?? '—' }}</td>
                            <td class="px-4 py-2">{{ $figure->editor->name ?? '—' }}</td>
                            <td class="px-4 py-2">{{ $figure->series->name ?? '—' }}</td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        @endif
    </div>
@endsection
