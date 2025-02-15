// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'ja'

export type Locales =
	| 'en'
	| 'ja'
	| 'ko'
	| 'zh'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	editor: {
		menu: {
			/**
			 * ファイル (&F)
			 */
			file: string
			/**
			 * 素材集 (&L)
			 */
			library: string
			/**
			 * 編集 (&E)
			 */
			edit: string
			/**
			 * 設定 (&P)
			 */
			preferences: string
			/**
			 * ヘルプ (&H)
			 */
			help: string
			/**
			 * 新規 (&N)
			 */
			'new': string
			/**
			 * 開く (&O)
			 */
			open: string
			/**
			 * 譜面保存 (&S)
			 */
			save: string
			/**
			 * 画像出力 (&I)
			 */
			image: string
			/**
			 * 元に戻す (&U)
			 */
			undo: string
			/**
			 * やり直し (&R)
			 */
			redo: string
			/**
			 * すべて選択 (&A)
			 */
			selectall: string
			/**
			 * 選択解除 (&U)
			 */
			unselectall: string
			/**
			 * 切り取り (&X)
			 */
			cut: string
			/**
			 * コピー (&C)
			 */
			copy: string
			/**
			 * 貼り付け (&P)
			 */
			paste: string
			/**
			 * 反転貼り付け (&F)
			 */
			flippaste: string
			/**
			 * 一覧 (&A)
			 */
			listall: string
			/**
			 * 追加 (&U)
			 */
			upload: string
			/**
			 * 言語 (&G)
			 */
			language: string
			/**
			 * リネーム (&R)
			 */
			rename: string
			/**
			 * 削除 (&D)
			 */
			'delete': string
			/**
			 * すべて削除 (&A)
			 */
			deleteall: string
			/**
			 * 複製 (&D)
			 */
			duplicate: string
			/**
			 * 左右反転 (&H)
			 */
			flip: string
			/**
			 * 上下反転 (&V)
			 */
			vflip: string
			/**
			 * 直線 (&S)
			 */
			straight: string
			/**
			 * 加速 (&I)
			 */
			curvein: string
			/**
			 * 減速 (&O)
			 */
			curveout: string
			/**
			 * 可視 (&B)
			 */
			visible: string
			/**
			 * 不可視 (&N)
			 */
			invisible: string
			/**
			 * 無視 (&G)
			 */
			ignored: string
			/**
			 * 縮める (&K)
			 */
			shrink: string
			/**
			 * ダウンロード (&U)
			 */
			download: string
			/**
			 * 分割 (&V)
			 */
			divide: string
			/**
			 * 結合 (&B)
			 */
			combine: string
			/**
			 * スライドに変換 (&S)
			 */
			toslide: string
			/**
			 * ストリームに変換 (&T)
			 */
			tostream: string
			/**
			 * バージョン情報 (&A)
			 */
			about: string
			/**
			 * エクスポート (&E)
			 */
			'export': string
		}
		menuDescription: {
			/**
			 * 新規譜面を作成
			 */
			'new': string
			/**
			 * 譜面一覧を開く
			 */
			open: string
			/**
			 * SUSファイルに出力
			 */
			save: string
			/**
			 * 譜面の画像化
			 */
			image: string
			/**
			 * 前の操作を取り消す
			 */
			undo: string
			/**
			 * 取り消した操作をやり直す
			 */
			redo: string
			/**
			 * すべてのノーツを選択
			 */
			selectall: string
		}
		panel: {
			/**
			 * （小節）
			 */
			measure: string
			/**
			 * 合計コンボ
			 */
			totalcombo: string
			/**
			 * 選択された
			 */
			totalselected: string
			/**
			 * 頭出し
			 */
			skipstart: string
			/**
			 * 再生／一時停止
			 */
			playpause: string
			/**
			 * 戻る
			 */
			skipback: string
			/**
			 * スクロール方式
			 */
			scrollmode: string
			/**
			 * 基本情報
			 */
			metadata: string
			/**
			 * タイトル
			 */
			title: string
			/**
			 * アーティスト
			 */
			artist: string
			/**
			 * 譜面作者
			 */
			author: string
			/**
			 * 統計
			 */
			statistics: string
			/**
			 * 履歴
			 */
			history: string
			/**
			 * 元に戻す
			 */
			undo: string
			/**
			 * やり直し
			 */
			redo: string
			/**
			 * 開く
			 */
			open: string
			/**
			 * マスター音量
			 */
			master: string
			/**
			 * SE 音量
			 */
			sfxvolume: string
			/**
			 * 音楽情報
			 */
			music: string
			/**
			 * 音楽ファイル
			 */
			musicfile: string
			/**
			 * コントロール
			 */
			control: string
			/**
			 * 更新時刻
			 */
			updatedTime: string
			/**
			 * オフセット
			 */
			offset: string
			/**
			 * 秒
			 */
			seconds: string
			visibility: {
				/**
				 * タップ
				 */
				taps: string
				/**
				 * フリック
				 */
				flicks: string
				/**
				 * スライド
				 */
				slides: string
				/**
				 * 中継点
				 */
				slidesteps: string
				/**
				 * すべて
				 */
				all: string
			}
		}
		scrollmode: {
			/**
			 * 上下スクロール
			 */
			page: string
			/**
			 * 固定スクロール
			 */
			smooth: string
			/**
			 * スクロールしない
			 */
			none: string
		}
		messages: {
			/**
			 * 数値を入力してください
			 */
			nonNumeralInputError: string
			/**
			 * {from}から{to}までの数値を入力してください
			 * @param {number} from
			 * @param {number} to
			 */
			outOfRangeInputError: RequiredParams2<'from', 'to'>
			/**
			 * {project} として保存されました。
			 * @param {string} project
			 */
			projectSavedAs: RequiredParams1<'project'>
			/**
			 * SUSファイル {filename} を読み込みました
			 * @param {string} filename
			 */
			loadingSUSSuccess: RequiredParams1<'filename'>
			/**
			 * SUSファイルを読み込む際にエラーが発生しました
			 */
			loadingSUSError: string
			/**
			 * 譜面が自動保存されました
			 */
			autoSaved: string
			/**
			 * 譜面が保存されました
			 */
			saved: string
			/**
			 * タイトルを入力してください
			 */
			inputTitlePrompt: string
			/**
			 * 説明を入力してください
			 */
			inputDescriptionPrompt: string
			/**
			 * タイトルや説明を入力してください
			 */
			inputEmptyError: string
			/**
			 * 本当にエディターを閉じますか
			 */
			exitConfirm: string
			/**
			 * 不明なファイルタイプです
			 */
			unknownFileType: string
			/**
			 * 設定を保存しました
			 */
			preferencesSaved: string
			/**
			 * 本当に削除しますか？
			 */
			deleteConfirm: string
			/**
			 * 楽曲のBPMが検出されました。BPMを{bpm}に変更しますか？
			 * @param {number} bpm
			 */
			confirmBPMDetected: RequiredParams1<'bpm'>
			/**
			 * 元に戻す操作はもうありません
			 */
			nothingToUndo: string
			/**
			 * やり直す操作はもうありません
			 */
			nothingToRedo: string
			/**
			 * 譜面 {name} を削除しました
			 * @param {string} name
			 */
			projectDeleted: RequiredParams1<'name'>
			/**
			 * 開かれている譜面はありません
			 */
			noProjectOpened: string
			/**
			 * 本当に実行しますか？
			 */
			confirm: string
			database: {
				/**
				 * 本当にデータベースをインポートしますか？すべてのデータが上書きされます。
				 */
				confirmImport: string
				/**
				 * データベースをインポートしました
				 */
				importSuccess: string
				/**
				 * データベースのインポートに失敗しました
				 */
				importFailed: string
				/**
				 * データベースをエクスポートしました
				 */
				exportSuccess: string
				/**
				 * データベースのエクスポートに失敗しました
				 */
				exportFailed: string
			}
			library: {
				/**
				 * 素材集の読み込みに失敗しました。
				 */
				loadingFailed: string
				/**
				 * 素材集に追加しようとするノーツが 20 を超えています。本当に追加しますか？
		
			⚠素材集は譜面をアップロードする所ではないため、フル尺の譜面を追加しないでください！⚠
			譜面をアップロードするには、「ヘルプ」をご参照ください。
				 */
				uploadTooLongConfirm: string
				/**
				 * 素材集に追加するノーツが選択されていません
				 */
				uploadNotSelectedError: string
				/**
				 * 素材を追加しました
				 */
				uploadSuccess: string
				/**
				 * 素材の追加が失敗しました
				 */
				uploadFailed: string
			}
			project: {
				/**
				 * 譜面「{name}」をインポートしました
				 * @param {string} name
				 */
				importSuccess: RequiredParams1<'name'>
				/**
				 * 譜面のインポートに失敗しました
				 */
				importFailed: string
			}
		}
		snapTo: {
			/**
			 * {n}分音符
			 * @param {number} n
			 */
			snap: RequiredParams1<'n'>
			/**
			 * 分音符（1 ~ 1920）
			 */
			snapWithRange: string
			/**
			 * カスタム
			 */
			custom: string
		}
		mutation: {
			/**
			 * 更新
			 */
			update: string
			/**
			 * 追加
			 */
			append: string
			/**
			 * カット
			 */
			cut: string
			/**
			 * 削除
			 */
			'delete': string
			/**
			 * 設定
			 */
			set: string
			/**
			 * 反転
			 */
			flip: string
			/**
			 * 移動
			 */
			move: string
			/**
			 * リサイズ
			 */
			resize: string
			/**
			 * 貼り付け
			 */
			paste: string
			/**
			 * 分割
			 */
			divide: string
			/**
			 * 結合
			 */
			combine: string
			/**
			 * 変換
			 */
			convert: string
			/**
			 * {amount} {type}を{operation}
			 * @param {number} amount
			 * @param {string} operation
			 * @param {string} type
			 */
			message: RequiredParams3<'amount', 'operation', 'type'>
			target: {
				/**
				 * ノーツ
				 */
				note: string
				/**
				 * スライド
				 */
				slide: string
				/**
				 * スライドノート
				 */
				slidenote: string
				/**
				 * 拍子
				 */
				timeSignature: string
				/**
				 * BPM
				 */
				bpm: string
			}
		}
		dialog: {
			/**
			 * BPM設定
			 */
			bpmTitle: string
			/**
			 * 拍子設定
			 */
			timeSignatureTitle: string
			/**
			 * カスタム分音符
			 */
			customSnappingTitle: string
			/**
			 * 画像出力
			 */
			imageTitle: string
			/**
			 * 素材集
			 */
			libraryTitle: string
			/**
			 * 環境設定
			 */
			preferencesTitle: string
			/**
			 * 譜面一覧
			 */
			projectsTitle: string
			/**
			 * 追加
			 */
			append: string
			/**
			 * 変更
			 */
			change: string
			/**
			 * 出力
			 */
			'export': string
			/**
			 * 削除
			 */
			'delete': string
			/**
			 * OK
			 */
			ok: string
			/**
			 * 新規作成
			 */
			'new': string
			/**
			 * 譜面ファイルを開く
			 */
			openscore: string
			/**
			 * PaletteWorks Editor について
			 */
			about: string
		}
		preferences: {
			/**
			 * 自動保存の間隔（秒）
			 */
			autosaveInterval: string
			/**
			 * スクロールの早さ（倍）
			 */
			scrollSpeed: string
			/**
			 * レーンの幅
			 */
			laneWidth: string
			/**
			 * ノーツの高さ
			 */
			noteHeight: string
			/**
			 * ミニマップ（プレビュー表示）を表示する
			 */
			minimapEnabled: string
			/**
			 * 三つ以上同時押し警告を表示する
			 */
			multiTapWarningEnabled: string
			/**
			 * 譜面ファイルの保存名
			 */
			fileSaveName: string
			/**
			 * 現在サポートされているキーワードは以下の通りです
			 */
			fileSaveNameTooltip: string
		}
		modes: {
			/**
			 * 選択
			 */
			select: string
			/**
			 * タップ
			 */
			tap: string
			/**
			 * スライド
			 */
			slide: string
			/**
			 * 中継点
			 */
			mid: string
			/**
			 * フリック
			 */
			flick: string
			/**
			 * クリティカル
			 */
			critical: string
			/**
			 * BPM
			 */
			bpm: string
			/**
			 * 拍子
			 */
			timeSignature: string
		}
	}
}

export type TranslationFunctions = {
	editor: {
		menu: {
			/**
			 * ファイル (&F)
			 */
			file: () => LocalizedString
			/**
			 * 素材集 (&L)
			 */
			library: () => LocalizedString
			/**
			 * 編集 (&E)
			 */
			edit: () => LocalizedString
			/**
			 * 設定 (&P)
			 */
			preferences: () => LocalizedString
			/**
			 * ヘルプ (&H)
			 */
			help: () => LocalizedString
			/**
			 * 新規 (&N)
			 */
			'new': () => LocalizedString
			/**
			 * 開く (&O)
			 */
			open: () => LocalizedString
			/**
			 * 譜面保存 (&S)
			 */
			save: () => LocalizedString
			/**
			 * 画像出力 (&I)
			 */
			image: () => LocalizedString
			/**
			 * 元に戻す (&U)
			 */
			undo: () => LocalizedString
			/**
			 * やり直し (&R)
			 */
			redo: () => LocalizedString
			/**
			 * すべて選択 (&A)
			 */
			selectall: () => LocalizedString
			/**
			 * 選択解除 (&U)
			 */
			unselectall: () => LocalizedString
			/**
			 * 切り取り (&X)
			 */
			cut: () => LocalizedString
			/**
			 * コピー (&C)
			 */
			copy: () => LocalizedString
			/**
			 * 貼り付け (&P)
			 */
			paste: () => LocalizedString
			/**
			 * 反転貼り付け (&F)
			 */
			flippaste: () => LocalizedString
			/**
			 * 一覧 (&A)
			 */
			listall: () => LocalizedString
			/**
			 * 追加 (&U)
			 */
			upload: () => LocalizedString
			/**
			 * 言語 (&G)
			 */
			language: () => LocalizedString
			/**
			 * リネーム (&R)
			 */
			rename: () => LocalizedString
			/**
			 * 削除 (&D)
			 */
			'delete': () => LocalizedString
			/**
			 * すべて削除 (&A)
			 */
			deleteall: () => LocalizedString
			/**
			 * 複製 (&D)
			 */
			duplicate: () => LocalizedString
			/**
			 * 左右反転 (&H)
			 */
			flip: () => LocalizedString
			/**
			 * 上下反転 (&V)
			 */
			vflip: () => LocalizedString
			/**
			 * 直線 (&S)
			 */
			straight: () => LocalizedString
			/**
			 * 加速 (&I)
			 */
			curvein: () => LocalizedString
			/**
			 * 減速 (&O)
			 */
			curveout: () => LocalizedString
			/**
			 * 可視 (&B)
			 */
			visible: () => LocalizedString
			/**
			 * 不可視 (&N)
			 */
			invisible: () => LocalizedString
			/**
			 * 無視 (&G)
			 */
			ignored: () => LocalizedString
			/**
			 * 縮める (&K)
			 */
			shrink: () => LocalizedString
			/**
			 * ダウンロード (&U)
			 */
			download: () => LocalizedString
			/**
			 * 分割 (&V)
			 */
			divide: () => LocalizedString
			/**
			 * 結合 (&B)
			 */
			combine: () => LocalizedString
			/**
			 * スライドに変換 (&S)
			 */
			toslide: () => LocalizedString
			/**
			 * ストリームに変換 (&T)
			 */
			tostream: () => LocalizedString
			/**
			 * バージョン情報 (&A)
			 */
			about: () => LocalizedString
			/**
			 * エクスポート (&E)
			 */
			'export': () => LocalizedString
		}
		menuDescription: {
			/**
			 * 新規譜面を作成
			 */
			'new': () => LocalizedString
			/**
			 * 譜面一覧を開く
			 */
			open: () => LocalizedString
			/**
			 * SUSファイルに出力
			 */
			save: () => LocalizedString
			/**
			 * 譜面の画像化
			 */
			image: () => LocalizedString
			/**
			 * 前の操作を取り消す
			 */
			undo: () => LocalizedString
			/**
			 * 取り消した操作をやり直す
			 */
			redo: () => LocalizedString
			/**
			 * すべてのノーツを選択
			 */
			selectall: () => LocalizedString
		}
		panel: {
			/**
			 * （小節）
			 */
			measure: () => LocalizedString
			/**
			 * 合計コンボ
			 */
			totalcombo: () => LocalizedString
			/**
			 * 選択された
			 */
			totalselected: () => LocalizedString
			/**
			 * 頭出し
			 */
			skipstart: () => LocalizedString
			/**
			 * 再生／一時停止
			 */
			playpause: () => LocalizedString
			/**
			 * 戻る
			 */
			skipback: () => LocalizedString
			/**
			 * スクロール方式
			 */
			scrollmode: () => LocalizedString
			/**
			 * 基本情報
			 */
			metadata: () => LocalizedString
			/**
			 * タイトル
			 */
			title: () => LocalizedString
			/**
			 * アーティスト
			 */
			artist: () => LocalizedString
			/**
			 * 譜面作者
			 */
			author: () => LocalizedString
			/**
			 * 統計
			 */
			statistics: () => LocalizedString
			/**
			 * 履歴
			 */
			history: () => LocalizedString
			/**
			 * 元に戻す
			 */
			undo: () => LocalizedString
			/**
			 * やり直し
			 */
			redo: () => LocalizedString
			/**
			 * 開く
			 */
			open: () => LocalizedString
			/**
			 * マスター音量
			 */
			master: () => LocalizedString
			/**
			 * SE 音量
			 */
			sfxvolume: () => LocalizedString
			/**
			 * 音楽情報
			 */
			music: () => LocalizedString
			/**
			 * 音楽ファイル
			 */
			musicfile: () => LocalizedString
			/**
			 * コントロール
			 */
			control: () => LocalizedString
			/**
			 * 更新時刻
			 */
			updatedTime: () => LocalizedString
			/**
			 * オフセット
			 */
			offset: () => LocalizedString
			/**
			 * 秒
			 */
			seconds: () => LocalizedString
			visibility: {
				/**
				 * タップ
				 */
				taps: () => LocalizedString
				/**
				 * フリック
				 */
				flicks: () => LocalizedString
				/**
				 * スライド
				 */
				slides: () => LocalizedString
				/**
				 * 中継点
				 */
				slidesteps: () => LocalizedString
				/**
				 * すべて
				 */
				all: () => LocalizedString
			}
		}
		scrollmode: {
			/**
			 * 上下スクロール
			 */
			page: () => LocalizedString
			/**
			 * 固定スクロール
			 */
			smooth: () => LocalizedString
			/**
			 * スクロールしない
			 */
			none: () => LocalizedString
		}
		messages: {
			/**
			 * 数値を入力してください
			 */
			nonNumeralInputError: () => LocalizedString
			/**
			 * {from}から{to}までの数値を入力してください
			 */
			outOfRangeInputError: (arg: { from: number, to: number }) => LocalizedString
			/**
			 * {project} として保存されました。
			 */
			projectSavedAs: (arg: { project: string }) => LocalizedString
			/**
			 * SUSファイル {filename} を読み込みました
			 */
			loadingSUSSuccess: (arg: { filename: string }) => LocalizedString
			/**
			 * SUSファイルを読み込む際にエラーが発生しました
			 */
			loadingSUSError: () => LocalizedString
			/**
			 * 譜面が自動保存されました
			 */
			autoSaved: () => LocalizedString
			/**
			 * 譜面が保存されました
			 */
			saved: () => LocalizedString
			/**
			 * タイトルを入力してください
			 */
			inputTitlePrompt: () => LocalizedString
			/**
			 * 説明を入力してください
			 */
			inputDescriptionPrompt: () => LocalizedString
			/**
			 * タイトルや説明を入力してください
			 */
			inputEmptyError: () => LocalizedString
			/**
			 * 本当にエディターを閉じますか
			 */
			exitConfirm: () => LocalizedString
			/**
			 * 不明なファイルタイプです
			 */
			unknownFileType: () => LocalizedString
			/**
			 * 設定を保存しました
			 */
			preferencesSaved: () => LocalizedString
			/**
			 * 本当に削除しますか？
			 */
			deleteConfirm: () => LocalizedString
			/**
			 * 楽曲のBPMが検出されました。BPMを{bpm}に変更しますか？
			 */
			confirmBPMDetected: (arg: { bpm: number }) => LocalizedString
			/**
			 * 元に戻す操作はもうありません
			 */
			nothingToUndo: () => LocalizedString
			/**
			 * やり直す操作はもうありません
			 */
			nothingToRedo: () => LocalizedString
			/**
			 * 譜面 {name} を削除しました
			 */
			projectDeleted: (arg: { name: string }) => LocalizedString
			/**
			 * 開かれている譜面はありません
			 */
			noProjectOpened: () => LocalizedString
			/**
			 * 本当に実行しますか？
			 */
			confirm: () => LocalizedString
			database: {
				/**
				 * 本当にデータベースをインポートしますか？すべてのデータが上書きされます。
				 */
				confirmImport: () => LocalizedString
				/**
				 * データベースをインポートしました
				 */
				importSuccess: () => LocalizedString
				/**
				 * データベースのインポートに失敗しました
				 */
				importFailed: () => LocalizedString
				/**
				 * データベースをエクスポートしました
				 */
				exportSuccess: () => LocalizedString
				/**
				 * データベースのエクスポートに失敗しました
				 */
				exportFailed: () => LocalizedString
			}
			library: {
				/**
				 * 素材集の読み込みに失敗しました。
				 */
				loadingFailed: () => LocalizedString
				/**
				 * 素材集に追加しようとするノーツが 20 を超えています。本当に追加しますか？
		
			⚠素材集は譜面をアップロードする所ではないため、フル尺の譜面を追加しないでください！⚠
			譜面をアップロードするには、「ヘルプ」をご参照ください。
				 */
				uploadTooLongConfirm: () => LocalizedString
				/**
				 * 素材集に追加するノーツが選択されていません
				 */
				uploadNotSelectedError: () => LocalizedString
				/**
				 * 素材を追加しました
				 */
				uploadSuccess: () => LocalizedString
				/**
				 * 素材の追加が失敗しました
				 */
				uploadFailed: () => LocalizedString
			}
			project: {
				/**
				 * 譜面「{name}」をインポートしました
				 */
				importSuccess: (arg: { name: string }) => LocalizedString
				/**
				 * 譜面のインポートに失敗しました
				 */
				importFailed: () => LocalizedString
			}
		}
		snapTo: {
			/**
			 * {n}分音符
			 */
			snap: (arg: { n: number }) => LocalizedString
			/**
			 * 分音符（1 ~ 1920）
			 */
			snapWithRange: () => LocalizedString
			/**
			 * カスタム
			 */
			custom: () => LocalizedString
		}
		mutation: {
			/**
			 * 更新
			 */
			update: () => LocalizedString
			/**
			 * 追加
			 */
			append: () => LocalizedString
			/**
			 * カット
			 */
			cut: () => LocalizedString
			/**
			 * 削除
			 */
			'delete': () => LocalizedString
			/**
			 * 設定
			 */
			set: () => LocalizedString
			/**
			 * 反転
			 */
			flip: () => LocalizedString
			/**
			 * 移動
			 */
			move: () => LocalizedString
			/**
			 * リサイズ
			 */
			resize: () => LocalizedString
			/**
			 * 貼り付け
			 */
			paste: () => LocalizedString
			/**
			 * 分割
			 */
			divide: () => LocalizedString
			/**
			 * 結合
			 */
			combine: () => LocalizedString
			/**
			 * 変換
			 */
			convert: () => LocalizedString
			/**
			 * {amount} {type}を{operation}
			 */
			message: (arg: { amount: number, operation: string, type: string }) => LocalizedString
			target: {
				/**
				 * ノーツ
				 */
				note: () => LocalizedString
				/**
				 * スライド
				 */
				slide: () => LocalizedString
				/**
				 * スライドノート
				 */
				slidenote: () => LocalizedString
				/**
				 * 拍子
				 */
				timeSignature: () => LocalizedString
				/**
				 * BPM
				 */
				bpm: () => LocalizedString
			}
		}
		dialog: {
			/**
			 * BPM設定
			 */
			bpmTitle: () => LocalizedString
			/**
			 * 拍子設定
			 */
			timeSignatureTitle: () => LocalizedString
			/**
			 * カスタム分音符
			 */
			customSnappingTitle: () => LocalizedString
			/**
			 * 画像出力
			 */
			imageTitle: () => LocalizedString
			/**
			 * 素材集
			 */
			libraryTitle: () => LocalizedString
			/**
			 * 環境設定
			 */
			preferencesTitle: () => LocalizedString
			/**
			 * 譜面一覧
			 */
			projectsTitle: () => LocalizedString
			/**
			 * 追加
			 */
			append: () => LocalizedString
			/**
			 * 変更
			 */
			change: () => LocalizedString
			/**
			 * 出力
			 */
			'export': () => LocalizedString
			/**
			 * 削除
			 */
			'delete': () => LocalizedString
			/**
			 * OK
			 */
			ok: () => LocalizedString
			/**
			 * 新規作成
			 */
			'new': () => LocalizedString
			/**
			 * 譜面ファイルを開く
			 */
			openscore: () => LocalizedString
			/**
			 * PaletteWorks Editor について
			 */
			about: () => LocalizedString
		}
		preferences: {
			/**
			 * 自動保存の間隔（秒）
			 */
			autosaveInterval: () => LocalizedString
			/**
			 * スクロールの早さ（倍）
			 */
			scrollSpeed: () => LocalizedString
			/**
			 * レーンの幅
			 */
			laneWidth: () => LocalizedString
			/**
			 * ノーツの高さ
			 */
			noteHeight: () => LocalizedString
			/**
			 * ミニマップ（プレビュー表示）を表示する
			 */
			minimapEnabled: () => LocalizedString
			/**
			 * 三つ以上同時押し警告を表示する
			 */
			multiTapWarningEnabled: () => LocalizedString
			/**
			 * 譜面ファイルの保存名
			 */
			fileSaveName: () => LocalizedString
			/**
			 * 現在サポートされているキーワードは以下の通りです
			 */
			fileSaveNameTooltip: () => LocalizedString
		}
		modes: {
			/**
			 * 選択
			 */
			select: () => LocalizedString
			/**
			 * タップ
			 */
			tap: () => LocalizedString
			/**
			 * スライド
			 */
			slide: () => LocalizedString
			/**
			 * 中継点
			 */
			mid: () => LocalizedString
			/**
			 * フリック
			 */
			flick: () => LocalizedString
			/**
			 * クリティカル
			 */
			critical: () => LocalizedString
			/**
			 * BPM
			 */
			bpm: () => LocalizedString
			/**
			 * 拍子
			 */
			timeSignature: () => LocalizedString
		}
	}
}

export type Formatters = {}

type Param<P extends string> = `{${P}}`

type Params1<P1 extends string> =
	`${string}${Param<P1>}${string}`

type Params2<P1 extends string, P2 extends string> =
	`${string}${Param<P1>}${string}${Param<P2>}${string}`

type Params3<P1 extends string, P2 extends string, P3 extends string> =
	`${string}${Param<P1>}${string}${Param<P2>}${string}${Param<P3>}${string}`

type RequiredParams1<P1 extends string> =
	| Params1<P1>

type RequiredParams2<P1 extends string, P2 extends string> =
	| Params2<P1, P2>
	| Params2<P2, P1>

type RequiredParams3<P1 extends string, P2 extends string, P3 extends string> =
	| Params3<P1, P2, P3>
	| Params3<P1, P3, P2>
	| Params3<P2, P1, P3>
	| Params3<P2, P3, P1>
	| Params3<P3, P1, P2>
	| Params3<P3, P2, P1>
