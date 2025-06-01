<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">

    <title>@yield('title', 'MyFiguDB')</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 text-gray-900 antialiased">

<nav class="bg-white shadow mb-6">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">

        <a href="{{ url('/') }}">@include('components/myfigudb_logo_lg', ['primaryColor' => '#000000', 'secondaryColor' => '#E391A1'])</a>


        <div>
            <a href="{{ route('figures.index') }}" class="mr-4 hover:underline">Figurines</a>
            <a href="{{ route('figures.create') }}" class="hover:underline">Ajouter</a>
        </div>
    </div>
</nav>

<main class="container mx-auto px-4">

    @if(session('success'))
        <div class="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded mb-4">
            {{ session('success') }}
        </div>
    @endif

    @yield('content')

        <div id="react-root"></div>

</main>

@viteReactRefresh
</body>
</html>
