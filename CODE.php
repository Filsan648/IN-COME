function Bar_chart(){
$COUNT=pessage::where('type','stock')->where('Nom_client','null')->count();

//barchart
  $data = pessage::where('type','entree')
    ->selectRaw('DISTINCT DATE_FORMAT(Date, "%M") as month') // Sélectionner le mois en lettres
    ->pluck('month'); // Récupérer les mois    $pessage_bar = [];
    $mont_bar=[];
 foreach($data as $dat ){
   $mont_bar[]=$dat;
 }
 $clients=[];

foreach($mont_bar as $mont){
    $pessage_bar[] = pessage::where('type', 'entree')
    ->whereRaw('DATE_FORMAT(Date, "%M") = ?', [$mont]) // Comparer le mois en lettres
    ->sum('Poids_net');

}




  //bar client
 $data_clients= pessage::where('type', 'entree')->distinct()->pluck('Nom_client');
  $client_month=[];
  $count_client=[];
foreach($data_clients as $data){
$clients[]=$data;
}
$poid_net=[];
foreach($clients as $client){
    $client_months= pessage::
     where('type', 'entree')
    ->selectRaw('DISTINCT DATE_FORMAT(Date, "%M") as month') // Sélectionner uniquement le mois
    ->pluck('month');
}
$cliets = pessage::selectRaw('DISTINCT Nom_client, MONTHNAME(Date) as Mois')
    ->where('type', 'entree')
    ->get()
    ->groupBy('Nom_client');

$data = [];
foreach ($cliets as $clientName => $datas) {
    foreach ($datas as $group) {
        $data[$clientName][] = [
            'Mois' => $group->Mois,
            'Poid' => pessage::where('type', 'entree')
                ->where('Nom_client', $clientName)
                ->whereRaw('DATE_FORMAT(Date, "%M") = ?', [$group->Mois])
                ->sum('Poids_net'),
            'clientNom' => $clientName
        ];
    }
}


 //Chauffeur
$chauffeurs = pessage::selectRaw('DISTINCT Nom_conducteur, MONTHNAME(Date) as Mois')
    ->where('type', 'entree')
    ->get()
    ->groupBy('Nom_conducteur');




    $chauffeur=[];
    $pessages=pessage::where('type','entree')->pluck('Nom_conducteur')->unique();
    foreach($pessages as $pessage ){
        $chauffeur[]=$pessage;
    }
    $countchauffeur=[];
    foreach($chauffeur as $chauff){
      $countchauffeur[]=pessage::where('Nom_conducteur',$chauff)->where('type','entree')->count();
    }
$DATAchauffeur=[];
foreach ($chauffeurs as $chauf => $datas) {
    foreach ($datas as $group) {
        $DATAchauffeur[$chauf][] = [
            'Mois' => $group->Mois,
            'voyage' => Pessage::where('type', 'entree')
                ->where('Nom_conducteur', $chauf)
                ->whereRaw('DATE_FORMAT(Date, "%M") = ?', [$group->Mois])
                ->count(),
                'chauf' => $chauf];
    }
}

foreach($client_months as $months){
$client_month[]=$months;
}

 //Resume
 $POIDS_TOTAL = pessage::where('type', 'entree')
->sum('Poids_net') / 1000;

$Livraision=pessage::where('type', 'entree')
                ->count();

$Nbr_clie = pessage::where('Nom_client', '!=', 'null')
->distinct('Nom_client')
->count('Nom_client');


return view('BartChart', compact('pessage_bar'
,'mont_bar'
,'chauffeur'
,'countchauffeur'
,'clients'
,'count_client'
,'client_month'
,'poid_net'
,'data'
,'COUNT'
,'DATAchauffeur',
'POIDS_TOTAL',
'Livraision',
'Nbr_clie'
));
  }